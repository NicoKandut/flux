<script lang="ts">
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import { interpret as interpretPython } from "./interpreter/python";
  import { interpret as interpretJavascript } from "./interpreter/javascript";

  let text = `[
    {
      "type": "forward",
      "pixels": 35
    },
    {
      "type": "repeat",
      "times": 8,
      "routine": [
        {
          "type": "turn",
          "degrees": 45
        },
        {
          "type": "forward",
          "pixels": 20
        },
        {
          "type": "turn",
          "degrees": 20
        }
      ]
    }
  ]`;

  const getAst = (t: string) => {
    try {
      return JSON.parse(t) ?? [];
    } catch (_) {
      return [];
    }
  };

  $: ast = getAst(text);
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Hello Flux✨!</h1>

  <textarea bind:value={text} />

  <textarea>{interpretPython(ast)}</textarea>
  <textarea>{interpretJavascript(ast)}</textarea>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }

  textarea {
    width: 300px;
    height: 400px;
  }
</style>
