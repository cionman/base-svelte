<script>
  let h1 = '<h1>Hello Heropy</h1>'
  let xss = '<iframe onload="alert(123)"></iframe>'
</script>
<pre>
    기본 보간법은 데이터를 HTML이 아닌 일반 텍스트로 해석합니다.
    실제 HTML을 출력하려면 {'{@html}'}를 사용해야 합니다.
    단, 이는 XSS 취약점으로 이어질 수 있기 때문에, 신뢰할 수 있는 콘텐츠에서만 사용하세요!
</pre>
{@html h1}
{@html xss}
