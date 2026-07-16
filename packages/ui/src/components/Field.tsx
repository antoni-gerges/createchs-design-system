import { useId, type InputHTMLAttributes } from 'react';

export interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  /** Persistent visible label (required — no placeholder-as-label). */
  label: string;
  helper?: string;
  error?: string;
  required?: boolean;
  id?: string;
}

/**
 * Labelled text input with helper text and an accessible error state.
 * Implements accessibility fix #7: visible label, helper, error + aria wiring.
 */
export function Field({ label, helper, error, required, id, className, ...rest }: FieldProps) {
  const auto = useId();
  const inputId = id ?? auto;
  const helpId = `${inputId}-help`;
  const errId = `${inputId}-err`;
  const describedBy = [helper ? helpId : null, error ? errId : null].filter(Boolean).join(' ') || undefined;

  return (
    <div className="cx-field">
      <label className="cx-field__label" htmlFor={inputId}>
        {label}
        {required ? (
          <span className="cx-field__req" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <input
        id={inputId}
        className={['cx-input', className].filter(Boolean).join(' ')}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        {...rest}
      />
      {helper && !error ? (
        <span className="cx-field__help" id={helpId}>
          {helper}
        </span>
      ) : null}
      {error ? (
        <span className="cx-field__error" id={errId} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
