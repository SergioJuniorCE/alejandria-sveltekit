<script lang='ts'>
  import axios from 'axios';
  let msg: string;
  async function getHello() {
    const res = await fetch('http://localhost:8080/auth/token', {});
    const data = await res.json();
    msg = JSON.stringify(data)
  }
</script>

<div class="container">
  <button on:click={getHello}>Test axios</button>
  <p>{msg}</p>
</div>