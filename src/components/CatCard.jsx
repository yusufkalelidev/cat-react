export default function CatCard({ imgSrc }) {
    return(
        <div className="col-sm mb-3">
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">

                    </p>
                    <a href="#" className="btn btn-primary"></a>
                </div>
            </div>
        </div>
    )
}