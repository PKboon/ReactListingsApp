import { useController } from 'react-hook-form';

import { Input, TextArea } from '@/components/ui';

const TextInput = ({
  control,
  name,
  type = 'text',
  multiline = false,
  ...props
}) => {
  const form = useController({ control, name });
  const error = form.formState.errors[name];

  return (
    <div>
      {multiline ? (
        <TextArea
          {...props}
          name={name}
          type={type}
          onChange={form.field.onChange}
          onBlur={form.field.onBlur}
          value={form.field.value || ''}
        />
      ) : (
        <Input
          {...props}
          name={name}
          type={type}
          onChange={form.field.onChange}
          onBlur={form.field.onBlur}
          value={form.field.value || ''}
        />
      )}
      {error && (
        <div className='mt-2 text-sm text-red-500'>{error.message}</div>
      )}
    </div>
  );
};

export default TextInput;
