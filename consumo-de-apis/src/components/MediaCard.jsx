function MediaCard({ title, mediaUrl, tags, metadata }) {
  return (
    <div className="media-card">

      <h3>{title}</h3>

      <img
        src={mediaUrl && mediaUrl !== "N/A" ? mediaUrl : "/imagem-padrao.png"}
        alt={title}
     />

      <div className="media-tags">
        {tags.map((tag, index) => (
          <span key={index}>
            {tag}
          </span>
        ))}
      </div>

      <div className="media-metadata">
        {metadata.map((item, index) => (
          <p key={index}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>

    </div>
  );
}

export default MediaCard;