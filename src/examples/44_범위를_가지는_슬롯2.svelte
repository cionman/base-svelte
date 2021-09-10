<script>
  import Wrap from './44_범위를_가지는_슬롯2/Wrap.svelte'

  let fruits = {
    apple: {
      value: '',
      options: {
        readonly: false,
        disabled: false,
        placeholder: 'placeholder A'
      }
    },
    banana: {
      value: 'BANANA',
      options: {
        disabled: false,
        placeholder: 'placeholder A'
      }
    }
  }
  function add(name) {
    console.log(name)
  }
  function update(name) {
    console.log(name)
  }
  function remove(name) {
    console.log(name)
  }
</script>

<Wrap
        scopeName="apple"
        let:_name>
    <label
            class="fruits__{_name}"
            name="{_name}">
        <input
                bind:value={fruits[_name].value}
                readonly={fruits[_name].options.readonly}
                disabled={fruits[_name].options.disabled}
                placeholder={fruits[_name].options.placeholder}
                on:change={() => add(_name)} />
    </label>
</Wrap>

<Wrap
        scopeName="banana"
        let:_name>
    <input
            bind:value={fruits[_name].value}
            disabled={fruits[_name].options.disabled}
            placeholder={fruits[_name].options.placeholder}
            on:click={() => update(_name)} />
</Wrap>

<Wrap
        scopeName="cherry"
        let:_name>
    <div
            class="hello-{_name}"
            name="{_name}"
            on:click={() => remove(_name)}>
        {_name}
    </div>
</Wrap>
