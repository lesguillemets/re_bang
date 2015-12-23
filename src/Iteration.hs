module Iteration where

import Data.Complex
import Base

drive :: Config -> Driver
drive (a,b) (x :+ y) = (y+a*x) :+ (x^(2::Int) +b)
