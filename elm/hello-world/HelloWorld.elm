module HelloWorld exposing (..)

helloWorld : Maybe String -> String
helloWorld name =
    case name of
        Just str -> "Hello, " ++ str ++ "!"

        Nothing -> "Hello, World!"
