export default function BaseButton({ type, fullWidth, text, onClick }) {
    const backgroundColor =
        type === 'secondary' ? '#4E78F2' : '#fff';
    const color = type === 'secondary' ? '#fff' : '#4E78F2';
    const border = type === 'secondary' ? 'none' : '1px solid #4E78F2';

    return (
        <button
            type="submit"
            onClick={onClick}
            style={{
                width: fullWidth ? '100%' : 'auto',
                padding: '12px',
                backgroundColor,
                color,
                border,
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '16px',
            }}
        >
            {text}
        </button>
    );
}