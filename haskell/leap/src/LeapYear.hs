module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year
    | year `isDividableBy` 400 = True
    | year `isDividableBy` 100 = False
    | year `isDividableBy` 4   = True
    | otherwise                = False

isDividableBy :: Integer -> Integer -> Bool
isDividableBy = ((== 0) .) . mod
