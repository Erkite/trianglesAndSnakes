function makeASnake(sizeOfSnake, snakeSymbol) {
    // Add your code inside of me!
if(sizeOfSnake <= 0)
{
    return "";
}

let result = "~<:=";
let isUppercase = false;

for (let i = 1; i <= sizeOfSnake; i++)
{
    result += isUppercase ? snakeSymbol.toUpperCase() : snakeSymbol.toLowerCase();
    isUppercase = !isUppercase;
}

result += "=++";
return result;

}

function makeATriangle(triangleHeight, triangleSymbol) {
    // Add your code inside of me!
if (triangleHeight <= 0)
{
    return "";
}

let result = "";
for(let i = 1; i<= triangleHeight; i++)
{
    for(let j = 1; j <= i; j++)
    {
        result += triangleSymbol;
    }

    if (i<triangleHeight)
    {
        result += "\n";
    }
}
return result;
}