export function LoadingCard() {
    return (
        <div className="cards__item">
            <div className="cards__card card">
                <div className="card__group">
                    <div className="card__theme _skeleton"></div>
                    <div className="card__btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__title _skeleton"></div>
                    <div className="card__date">
                        <div className="card__date-icon _skeleton"></div>
                        <div className="card__date-text _skeleton"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}