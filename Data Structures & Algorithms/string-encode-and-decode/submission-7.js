class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const codec = []
        for (let i = 0; i < strs.length; i++) {
            let str = strs[i]
            let splitStr = str.split('')
            for (let k = 0; k < splitStr.length; k++) {
                let char = splitStr[k]
                codec.push((char.charCodeAt(0) + 1) + ".")
            }
            codec.push('/')
        }
        codec.pop()
        console.log(codec)
        return strs.length == 0 ? '-1' : codec.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str == "-1") {
            return []
        }
        let arr = str.split('/')
        let decoded = []
        for (let i = 0; i < arr.length; i++) {
            let encodedStr = arr[i]
            let encodedArr = encodedStr.split(".")
            let stringArr = []
            for (let k = 0; k < encodedArr.length; k++) {
                stringArr.push(String.fromCharCode(encodedArr[k] - 1))
            }
            stringArr.pop()
            decoded.push(stringArr.join(""))
        }
        return decoded
    }
}
