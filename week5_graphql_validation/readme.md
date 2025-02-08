
query{
  w1 :welcome
  w2: welcome
  greet(name: "Fatima")
  
u1:user {
  
  fnm
  lnm
  
}
  
  u11: user{
    ...UserFields
  }
  
  u2:user {
    uid
    fnm
    lnm
    salary
  }
  u3:user {
    uid
    fnm
    lnm
    salary
  }
  
}
fragment UserFields on User{
  fnm
  lnm
  
}

mutation{
    u1: addUser(uid:1, fnm: "Fatima", lnm: "Arab", salary:678.90){
        uid
        fnm
        lnm
        salary
    }
     u2: addUser(uid:1, fnm: "Fatima", lnm: "Arab", salary:678.90){
        uid
        fnm
        lnm
        salary
    }
}


mutation{
    u1: addUser(uid:1, fnm: "Milad", lnm: "Arab", salary:678.90){
        uid
        fnm
        lnm
        salary
    }
     u2: addUser(uid:1, fnm: "Sam", lnm: "Smith", salary:978.90){
        uid
        fnm
        lnm
        salary
    }
}
  