import styles from './Card.module.css'


export const Card = ({imagem, descricao, valor}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={imagem} alt={`Foto de ${descricao}`} />
            </div>
            <div>
                <h5 className={styles.descricao}>{descricao}</h5>
                <h2>R${valor}</h2>
            </div>
        </div>
    )
}

export default Card;