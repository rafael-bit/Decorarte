import React, { useState, useEffect } from 'react';

export default function Home() {
	const [showButton, setShowButton] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const toggleButton = () => {
      const scrollY = window.scrollY;
      if (scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', toggleButton);

    return () => window.removeEventListener('scroll', toggleButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetch('/api.json')
      .then((response) => response.json())
      .then((data) => {
        const allProducts = data?.produtos || [];
        setDisplayedProducts(allProducts);
      })
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);


	return (
		<>
			<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="/banner1.webp" className="d-block w-100" style={{height: '500px' }} alt="Image Carousel" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Desconto na sua sala</h5>
							<p>Mais de 30% OFF em produtos para sua sala.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="/banner2.webp" className="d-block w-100" style={{height: '500px' }} alt="Image Carousel" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Monte sua casa</h5>
							<p>Monte sua casa com os melhores preços e produtos aqui.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="/banner3.webp" className="d-block w-100" style={{height: '500px' }} alt="Image Carousel" />
						<div className="carousel-caption d-none d-md-block">
							<h5>Desconto no seu quarto</h5>
							<p>Mais de 25% de desconto em todos os produtos para seu quarto</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev h-90" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				</button>
				<button className="carousel-control-next h-90" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
				</button>
			</div>

			<div className="container-fluid mt-n5">
				<div className="row">
					<div className="d-smx-none col-md-3">
						<div className="card">
							<div className="card-body">
								<a href="/produtos/moveis" className="nav-link">
									<h5 className="card-title d-flex align-items-center justify-content-center card-h text-primary-card">
										<img
											src="/moveis.svg"
											alt="Image forniture"
											style={{ maxWidth: '2.1em', height: 'auto', paddingRight: '1rem' }}
										/>
										Móveis
									</h5>
								</a>
							</div>
						</div>
					</div>

					<div className="d-smx-none col-md-3">
						<div className="card">
							<div className="card-body">
								<a href="produtos/iluminacao" className="nav-link">
									<h5 className="card-title d-flex align-items-center justify-content-center card-h text-primary-card">
										<img
											src="/iluminacao.svg"
											alt="Image ilumination"
											style={{ maxWidth: '2.1em', height: 'auto', paddingRight: '1rem' }}
										/>
										Iluminação
									</h5>
								</a>
							</div>
						</div>
					</div>

					<div className="d-smx-none col-md-3">
						<div className="card">
							<div className="card-body">
								<a href="/produtos/tapetes" className="nav-link">
									<h5 className="card-title d-flex align-items-center justify-content-center card-h text-primary-card">
										<img
											src="/tapetes.svg"
											alt="Image mat"
											style={{ maxWidth: '2.3em', height: 'auto', paddingRight: '1rem' }}
										/>
										Tapetes
									</h5>
								</a>
							</div>
						</div>
					</div>

					<div className="d-smx-none col-md-3">
						<div className="card">
							<div className="card-body">
								<a href="/promocao" className="nav-link">
									<h5 className="card-title d-flex align-items-center justify-content-center card-h text-primary-card">
										<img
											src="/promocao.svg"
											alt="Image promotion"
											style={{ maxWidth: '2.1em', height: 'auto', paddingRight: '1rem' }}
										/>
										Promoções
									</h5>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<div className="container mt-5">
        <h2 className='text-center'>Todos os Produtos</h2>
        {displayedProducts.map((category) => (
          <div key={category.categoria}>
            <h3 className='mt-5'>{category.categoria}</h3>
            <div className="row">
              {category.itens.map((product) => (
                <div key={product.id} className="card rounded col-md-3">
                  <div className='card-body text-center'>
                    <img src={product.imagem} alt={product.nome} />
                    <h4>{product.nome}</h4>
                    <p>{product.descricao}</p>
                    <p>Preço: R$ {product.preco}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
			 {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-3 p-3 d-flex"
          style={{ zIndex: 1000 }}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16"><path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/></svg>
        </button>
      )}
		</>
	)
}