---
name: 'component'
root: 'src/components/Parts'
output: '.'
ignore: []
questions:
  name: 'Please enter a component name.'
  hasStory:
    confirm: 'Is it have story? (Default false)'
    initial: false
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

type {{ inputs.name | pascal }}Props = {

}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props) => {
  return <></>
}
```

# `{{ !inputs.hasStory && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  component: {{ inputs.name | pascal }},
};

export default meta;
type Story = StoryObj<typeof {{ inputs.name | pascal }}>;

export const Default: Story = {
  args: {
    props: 'サンプル'
  },
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
