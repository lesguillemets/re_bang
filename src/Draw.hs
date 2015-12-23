module Draw where

import Data.Complex

import Haste
import Haste.Graphics.Canvas
import Haste.Graphics.AnimationFrame

import Base
import Iteration
import Consts

baseDriver :: Driver
baseDriver = drive baseConfig

initLoop :: Canvas -> Driver -> Complex Double -> IO FrameRequest
initLoop cnv f z =
    requestAnimationFrame (
        \ t0 -> requestAnimationFrame(
            \t1 -> mainLoop cnv f z t0 t1 *> return ()) *> return ())

mainLoop :: Canvas -> Driver -> Complex Double
         -> HRTimeStamp -> HRTimeStamp -> IO ()
mainLoop cnv f z t0 t1 = do
    (z',t') <- step cnv f z t0 t1
    _ <- requestAnimationFrame (mainLoop cnv f z' t')
    return ()


step :: Canvas -> Driver -> Complex Double
     -> HRTimeStamp -> HRTimeStamp -> IO (Complex Double, HRTimeStamp)
step cnv f z t0 t1 =
    let dt = t1-t0
        dots = floor (dotsPerSecond * dt / 1000)
        rt = dt - 1000*fromIntegral dots / dotsPerSecond
        in do
        z' <- dotN cnv f z dots
        return (z', t1-rt)

dotN :: Canvas -> Driver -> Complex Double -> Int -> IO (Complex Double)
-- TODO : fold
-- TODO : monad
dotN cnv f z 0 = return z
dotN cnv f z n = do
    drawDot cnv (z*100)
    dotN cnv f (f z) (n-1)

drawDot :: Canvas -> Complex Double -> IO ()
drawDot cnv =
    renderOnTop cnv . translate (250,250)
        . color (RGB 0 0 255) . fill . dotAt

dotAt :: Complex Double -> Shape ()
dotAt (x:+y) = rect (x,y) (x+1,y+1)
