import { Equal, Expect } from '@type-challenges/utils'

type Case1 = ['', '', '']
type Case2 = ['+', '', '']
type Case3 = ['+', '1', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '10', '%']
type Case6 = ['-', '99', '%']

type cases = [
    Expect<Equal<RegexCapture<''>, Case1>>,
    Expect<Equal<RegexCapture<'+'>, Case2>>,
    Expect<Equal<RegexCapture<'+1'>, Case3>>,
    Expect<Equal<RegexCapture<'+100%'>, Case4>>,
    Expect<Equal<RegexCapture<'10%'>, Case5>>,
    Expect<Equal<RegexCapture<'-99%'>, Case6>>,
]
