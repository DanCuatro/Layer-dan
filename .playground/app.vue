<script setup>
  // import {LocalStorage} from 'utils/mod.ts'

  // const respos = await rest({
  //   endpoint:'/api/auth/login',
  //   method:'POST',
  //   body:{
  //     email:"omar.dev.clau@gmail.com",
  //     password:"Inever&9"
  //   }
  // })
  // console.log(respos)

  // console.log(LocalStorage)
  // onMounted(async()=>{
  //   const login = await Auth.login("omar.dev.clau@gmail.com","Inever&9")
  //   console.log("login")
  //   let authToken = LocalStorage.get('authToken');
  //   console.log({authToken})
  //   const logout = await Auth.logout("omar.dev.clau@gmail.com","Inever&9")
  //   console.log("logout")
  //   authToken = LocalStorage.get('authToken');
  //   console.log({authToken})
  // })
</script>

<template>
  <div>
    <Head>
      <Title>Test</Title>
    </Head>
    <HelloWorld name="dan"/>
    <NuxtPage />
  </div>
</template>
