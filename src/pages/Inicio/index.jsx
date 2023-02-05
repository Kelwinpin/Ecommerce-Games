import styles from './Inicio.module.css'
import Card from "components/Card";
import foto from 'image/GBA.png'

export const Inicio = () => {
    return (
        <section>
            <div className={styles.fileiraCards}>
                <Card descricao="Console Gameboy Advanced" imagem={foto} valor='350,00'/>
                <Card descricao="Console Gameboy Advanced" imagem={foto} valor='350,00'/>
                <Card descricao="Console Gameboy Advanced" imagem={foto} valor='350,00'/>
                <Card descricao="Console Gameboy Advanced" imagem={foto} valor='350,00'/>
                <Card descricao="Console Gameboy Advanced" imagem={foto} valor='350,00'/>
            </div>
        </section>
    )
}

export default Inicio;