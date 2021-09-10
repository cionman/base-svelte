<script>
  // Svelte REPL에서는 npm install을 사용할 수 없어요...
  // 자바스크립트 fetch 함수를 사용해도 되지만, 사용법이 일부 다릅니다.
  // VS Code에서는 Axios 모듈을 다음과 같이 설치하세요!!
  // npm i -D axios
  // import axios from 'axios'
  import axios from 'axios'

  // http://www.omdbapi.com/apikey.aspx에서 API키를 무료로 발급 받을 수 있습니다.
  // 발급 받은 API키를 입력하고 테스트해 보세요!
  // 무료 API는 하루 1000개 데이터 제한이 있어요.
  let apikey = '8bd7a503'

  let title = ''
  // let promise = new Promise(resolve => resolve([]))
  let promise = Promise.resolve([])

  function searchMovies() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios(`https://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
        console.log(res)
        resolve(res.data.Search)
      } catch (err) {
        console.log(err)
        reject(err)
      } finally {
        console.log('Done!')
      }
    })
  }
</script>
<pre>
Await 비동기 블록은 Promise 객체를 사용해서 비동기 코드를 다음 상태로 분기할 수 있습니다.
- 대기(pending): ‘이행’하거나 ‘거부’되지 않은 초기 상태.
- 이행(fulfilled): 연산이 성공적으로 완료됨.
- 거부(rejected): 연산이 실패함.
다음의 간단한 영화 검색 예제를 테스트하기 위해 OMDb API에서 API키를 무료로 발급받으세요.
</pre>
<input bind:value={title} />
<button on:click={() => promise = searchMovies()}>검색!</button>

{#await promise}
    <!-- pending(대기) -->
    <p style="color: royalblue;">loading...</p>
{:then movies}
    <!-- fulfilled(이행) -->
    <ul>
        {#each movies as movie}
            <li>{movie.Title}</li>
        {:else}
            <li>검색된 결과가 없어요...</li>
        {/each}
    </ul>
{:catch err}
    <!-- rejected(거부) -->
    <p style="color: red;">{err.message}</p>
{/await}
