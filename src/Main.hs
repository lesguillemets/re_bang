import Haste
import Haste.DOM
import Haste.Graphics.Canvas
import Data.Complex
import Draw
import Consts

main = do
    Just cnv <- getCanvasById "world"
    initLoop cnv baseDriver (0.1:+0.3)
