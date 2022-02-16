/** A compiler warner only exist to rise a TS compiler error when a new Type is added to the watched type.
 *
 * The idea is to call it anywhere we can forget to update code when we add a new type, and where the TS compiler won't
 * notice any problem.
 *
 * When called, a warner is given a string to help you understand what is it that you have to do to make sure you did
 * everything right.
 */
export interface CompilerWarner {
    warnCompiler<T>(helpMessage: string, returnValue: T | (() => T)): T;
}

/** Build a compiler warner. For example you have a type defined as :
 *
 * type MyRecord = {
 *    name : string,
 *    age : number
 * }
 *
 * If you want to watch MyRecord for any modification, in order to warn the TS compiler
 * in some places when MyRecord is updated, build your compiler warner like this :
 *
 * MyRecordCompilerWarner = buildCompilerWarner(() => {
 *    return {
 *        name = "",
 *        age = 0
 *    }
 * });
 *
 * This way if the structure of MyRecord is changed the TS compiler will stop at MyRecordCompilerWarner,
 * as the returned record in the builder does not match MyRecord anymore.
 *
 * To watch a type you can proceed like this :
 *
 * type Color = 'Blue' | 'Red' | 'Green'
 *
 * ColorCompilerWarner = buildCompilerWarner(color => {
 *    switch (color) {
 *        case 'Blue':
 *            return 'Blue'
 *
 *        case 'Red':
 *            return 'Red'
 *
 *        case 'Green':
 *            return 'Green'
 *    }
 * });
 *
 * This way if you add a Color to your type, the switch case in your compiler warner won't be
 * exhaustive anymore, which will warn the TS compiler.
 *
 * Once build, you just need to call your warner in places you can forget to update after
 * updating your watched type, using the function warnCompiler. You can add a message to explain
 * what is it you have to do when warned by TS compiler.
 *
 * const updateMyRecord = (myRecord : MyRecord) : MyRecord => {
 *    return MyRecordCompilerWarner.warnCompiler('Update new MyRecord property if necessary', {
 *        ...myRecord,
 *        age : myRecord.age + 1
 *    });
 * }
 *
 * You can also pass a function to your CompilerWarner, it will execute it and return the result.
 *
 * const isColorBeautiful = (color : Color) : boolean => {
 *    return ColorCompilerWarner.warnCompiler('Return true for your new Color if it is beautiful to avoid falling in default', () => {
 *        switch (color) {
 *            case 'Red':
 *              return true;
 *            default:
 *              return false
 *        }
 *    });
 * }
 *
 * When you change a watched type, its CompilerWarner will rise a TS compiler error. All you have to do is search for
 * all uses of this CompilerWarner in the code (by searching MyTypeCompilerWarner.warnCompiler for example) and follow
 * the instructions you left for yourself. Once you made sure you updated code where it is necessary, you can fix you
 * CompilerWarner to remove the TS error.
 */

export const buildCompilerWarner = <K = void>(
    _: (typeToWatch: K) => K extends void ? 'Must provide type' : K
): CompilerWarner => {
    return {
        warnCompiler<T>(_: string, returnValue: T | (() => T)): T {
            if (returnValue instanceof Function) {
                return returnValue();
            } else {
                return returnValue;
            }
        }
    };
};
