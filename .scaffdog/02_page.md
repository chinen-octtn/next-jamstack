---
name: 'pages'
root: 'src/components/Pages'
output: '.'
ignore: []
questions:
  name: 'Please enter a component name.'
  hasTest:
    confirm: 'Is it have test? (Default false)'
    initial: false
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}'
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import styles from './{{ inputs.name | pascal }}.module.scss'

export const {{ inputs.name | pascal }} = () => {
  return (
    <main className={styles.{{ inputs.name | pascal }}}></main>
  )
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
.{{ inputs.name | pascal }} {
}
```

# `{{ !inputs.hasTest && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.ts`

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

describe('{{ inputs.name | pascal }}のテスト', () => {

  it('テストケースと期待される結果を記述', () => {
    render(<ToDoList />)
    expect(screen.getByText('ToDo List')).toBeTruthy()
  })

})

```
