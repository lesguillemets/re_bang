module Base where
import Data.Complex (Complex(..))

type Config = (Double,Double)
type Driver = Complex Double -> Complex Double
