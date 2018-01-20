module Bob exposing (..)

import String exposing (..)

isYelling : String -> Bool
isYelling input = 
    (input == toUpper input) && not(input == toLower input)

isAsking : String -> Bool
isAsking = trim >> endsWith "?"

isBlank : String -> Bool
isBlank = trim >> isEmpty 

hey : String -> String
hey input =
    if isBlank input then
        "Fine. Be that way!"
    else if isYelling input then
        "Whoa, chill out!"
    else if isAsking input then
        "Sure."
    else
        "Whatever."