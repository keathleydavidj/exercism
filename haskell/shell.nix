{ nixpkgs ? import <nixpkgs> {}, compiler ? "ghc802" }:
let
  inherit (nixpkgs) pkgs;
  ghc = pkgs.haskell.packages.${compiler}.ghcWithPackages (ps: with ps; [
          hlint hspec
        ]);
in
pkgs.stdenv.mkDerivation {
  name = "exercism";
  buildInputs = [ ghc ];
  shellHook = "eval $(egrep ^export ${ghc}/bin/ghc)";
}