const NUMBER_OF_DIGIT = 6;

function GeneratePassword() {
    const min = Math.pow(10, NUMBER_OF_DIGIT - 1);
    const max = Math.pow(10, NUMBER_OF_DIGIT) - 1;
    return Math.floor(Math.random() * (max - min)) + min;
}

export { GeneratePassword, NUMBER_OF_DIGIT };