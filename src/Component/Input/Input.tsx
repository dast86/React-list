import styles from "./styles.module.css";


export interface DataInput {
    username:string,
    name:string,
    email:string
  }

interface Props {
    data:DataInput,
    setData: (params: (prev:DataInput) => DataInput) => void,
    ckickAddForm: (event: React.FormEvent<HTMLButtonElement>) => void,
    onClose: (param:boolean) => void,
    children: React.ReactNode;
}

const InputForm = ({data, setData, ckickAddForm,onClose, children}:Props) => {
   
    return (
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={() => onClose(false)}></div>
        <div className={styles.wrapper}>
          <h2>{children}</h2>
          <form action="#">
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Ваш псевдоним"
                value={data.username}
                onChange={(e) =>
                    setData((prev) => ({ ...prev, username: e.target.value }))
                }
                required
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Настоящие имя"
                value={data.name}
                onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Почта для связи"
                value={data.email}
                onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>
            <div className={styles.inputBox}>
              <button
                onClick={ckickAddForm}
                className={styles.button}
                type="submit"
              >
                Готово
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default InputForm