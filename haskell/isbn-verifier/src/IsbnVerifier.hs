module IsbnVerifier (isbn) where

import Data.Char (digitToInt, isDigit)

-- isbn :: String -> Bool
-- isbn str = let trimmed = replace "-" "" str
--            in length trimmed == 10
--             && all isDigit (init trimmed)
--             && (trimmed !! 9) `elem` (['0'..'9'] ++ "X")
--             && (sum [(readDigit (trimmed !! i)) * (10 - i) | i <- [0..9]]) `mod` 11 == 0

isbn :: String -> Bool
isbn str = let digits = map readDigit $ filter isDigit str
               digitsWithFormula = zipWith (*) [1..10] digits
            in sum digitsWithFormula `mod` 11 == 0

readDigit :: Char -> Int
readDigit x 
    | x == 'X' = 10
    | otherwise = digitToInt x