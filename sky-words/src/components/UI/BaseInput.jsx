export default function BaseInput({
    type,
    name,
    value,
    placeholder,
    error,
    onChange,
}) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={{
                padding: '14px',
                width: '100%',
                border: error ? '1px solid red' : '0.7px solid #d4dbe5',
                borderRadius: '8px',
                marginBottom: '16px',
                fontSize: '16px',
            }}
        />
    );
}