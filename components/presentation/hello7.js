export default ({ context }) => (
  <>
    <p>
      Component:{' '}
      <span>
        <strong>Hello7</strong>
      </span>
    </p>
    {context && <pre style={{ color: 'blue' }}>{JSON.stringify(context)}</pre>}
  </>
);
