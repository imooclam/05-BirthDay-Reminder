import { useGlobalContext } from './contextApi/GlobalContext';
import styled from 'styled-components';
import { AiFillCloseSquare } from 'react-icons/ai';
function App() {
  const { person } = useGlobalContext();
  const { personData, reset, remove } = useGlobalContext();
  console.log(person);
  return (
    <Wrapper>
      <article className="container">
        <article className="back-reminder">
          <h1>{person.length} birthdays Today</h1>
          {person.map(user => {
            const { id, name, age, image } = user;
            console.log(user);
            return (
              <article key={id} className="front-reminder">
                <section className="user-reminder">
                  <img src={image} alt={name} className="img" />
                  <section className="user-info">
                    <h2>{name}</h2>
                    <h3>{age}</h3>
                  </section>
                </section>
                <button
                  type="button "
                  className="btn"
                  onClick={() => remove(id)}
                >
                  <AiFillCloseSquare />
                </button>
              </article>
            );
          })}
          {person.length < 1 ? (
            <button type="button " className="btn btn-large" onClick={reset}>
              reset
            </button>
          ) : (
            <button
              type="button "
              className="btn btn-large"
              onClick={personData}
            >
              clear
            </button>
          )}
        </article>
      </article>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.article`
  display: grid;
  background-color: #fae5d3;
  min-height: 100vh;
  width: 100%;
  place-items: center;

  .back-reminder {
    background-color: #fdf2e9;
    /* this is must be Written */
    min-height: auto;
    min-width: 70vw;
    padding: 2rem;
    box-shadow: 0 0 15px 1px #ee822a6c;
    border-radius: 5px;

    h1 {
      margin-bottom: 5rem;
    }
  }
  .front-reminder {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: space-around;
    margin: 3rem 0;
    .user-reminder {
      display: flex;
      gap: 2rem;
      align-items: center;
      .img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }
    }
    .btn {
      font-size: 3rem;
      background: none;
      box-shadow: none;
      border: none;
      svg {
        fill: #00aeff;
        /* stroke: red;
        border: none;
        margin: 0;
        padding: 0;
       */
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .user-info h2 {
    font-size: 1.6rem;
    font-weight: 700;
  }
  .btn-large {
    font-size: 2rem;
    padding: 1rem 3rem;
    background-color: #00aeff;
    font-weight: 700;
    text-align: center;
    width: 100%;
  }
  .btn-large:hover {
    background-color: #6be1f8;
  }
`;
