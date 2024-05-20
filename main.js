const numPattern ={
    0:{
      mod: 1,
      0: 0,
    },
    1:{
      mod: 1,
      0: 1,
    },
    2:{
      mod: 4,
      0: 2,
      1: 4,
      2: 8,
      3: 6,
    },
    3:{
      mod: 4,
      0: 3,
      1: 9,
      2: 7,
      3: 1,
    },
    4:{
      mod: 2,
      0: 4,
      1: 6,
    },
    5:{
      mod: 1,
      0: 5,
    },
    6:{
      mod: 1,
      0: 6,
    },
    7:{
      mod: 4,
      0: 7,
      1: 9,
      2: 3,
      3: 1,
    },
    8:{
      mod: 4,
      0: 8,
      1: 4,
      2: 2,
      3: 6,
    },
    9:{
      mod: 2,
      0: 9,
      1: 1,
    }
  }
  
  function lastDigit(n, m) {
    if (m == BigInt(0)) return BigInt(1)
    n = Number(n % BigInt(10))
    m = (m - BigInt(1)) % BigInt(numPattern[n].mod)
    return BigInt(numPattern[n][m])
  }