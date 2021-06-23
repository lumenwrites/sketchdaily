export default function Error({ error }) {
  if (!error) return null
  return (
    <div className="error">
      {error}
    </div>
  )
}
