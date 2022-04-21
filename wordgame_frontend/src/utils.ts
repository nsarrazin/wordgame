export function decrypt(key:string) {
  return key;
}

export function encrypt(word:string) {
  return word;
}

export function validate(key:string|null) {
  return key !== null;
}

export function getScore(word:string) : number {
  validate(word);
  return 0.1;
}

export function similarity(
  A:Array<number>,
  B:Array<number>,
):number {
  let dotproduct = 0;
  let mA = 0;
  let mB = 0;

  for (let i = 0; i < A.length; i += 1) { // here you missed the i++
    dotproduct += (A[i] * B[i]);
    mA += (A[i] * A[i]);
    mB += (B[i] * B[i]);
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  const value = (dotproduct) / ((mA) * (mB)); // here you needed extra brackets
  return value;
}
