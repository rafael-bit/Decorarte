
export default function Home() {
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
								<a href="" className="nav-link">
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
								<a href="" className="nav-link">
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
								<a href="" className="nav-link">
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
								<a href="" className="nav-link">
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
		</>
	)
}