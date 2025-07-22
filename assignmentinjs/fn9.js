function countVowels(str)
{
    let count = 0
    const vowels = "aeiouAEIOU"
    let i
    for (i = 0; i < str.length; i++) 
    {
        if (vowels.includes(str[i])) 
        {
            count++
        }
    }
    return count;
}

const result = countVowels("Kafina Maharjan")
console.log("The Vowels in given string is",result)
