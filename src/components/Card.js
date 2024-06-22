function Card({ data, currentIndex }) {
    const policyText = data[currentIndex].Policy;
    const fontSize = policyText.length > 20 ? 'text-2xl' : 'text-4xl'; // Dynamically adjust font size based on text length
  
    return (
      <div className="border bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden mt-16" data-v0-t="card">
        <div className="relative h-[400px] bg-gradient-to-br from-primary to-secondary">
          <div className="absolute top-4 right-4 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground border border-gray-300 shadow-sm">
            {data[currentIndex].Category}
          </div>
          <div className="flex h-full items-center justify-center p-6">
            <h2 className={`${fontSize} font-bold text-primary-foreground`}>
              {policyText}
            </h2>
          </div>
        </div>
      </div>
    );
  }

export default Card;