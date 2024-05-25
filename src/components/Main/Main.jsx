import {
  CircleUserRound,
  ImagePlus,
  Leaf,
  LeafIcon,
  MicIcon,
  SendHorizontal,
  User2Icon,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Main.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    resultData,
    loading,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Heritage Guide</p>
          <CircleUserRound />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Namaste,</span>
                </p>
                <p>How can I help you today ?</p>
              </div>

              <div className="cards">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div
                    className="card"
                    onClick={() =>
                      onSent(
                        "can you name a country known for its unique bird variteis?"
                      )
                    }
                  >
                    <p>
                      can you name a country known for its unique bird variteis?
                    </p>
                    <Leaf className="icon" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div
                    className="card"
                    onClick={() =>
                      onSent(
                        " what is the best flowering season for strobillanthus kunthiana ?"
                      )
                    }
                  >
                    <p>
                      what is the best flowering season for strobillanthus
                      kunthiana ?
                    </p>
                    <Leaf className="icon" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div
                    className="card"
                    onClick={() =>
                      onSent(
                        "can you name a less aesthetically pleasing but ecologically crucial, biodiversity heritage site?"
                      )
                    }
                  >
                    <p>
                      can you name a less aesthetically pleasing but
                      ecologically crucial, biodiversity heritage site?
                    </p>
                    <Leaf className="icon" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <div
                    className="card "
                    onClick={() =>
                      onSent(
                        "can you brainstorm ways to support conservation site with  the communities live alongside bioheritage sites?"
                      )
                    }
                  >
                    <p>
                      can you brainstorm ways to support conservation site with
                      the communities live alongside bioheritage sites?
                    </p>
                    <Leaf className="icon" />
                  </div>
                </motion.div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <User2Icon />
                <p> {recentPrompt} </p>
              </div>

              <div className="result-data">
                <LeafIcon />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}>
                    {/* {{ resultData }} */}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Search"
              />
              <div className="icon">
                <ImagePlus />
                <MicIcon />
                {input ? <SendHorizontal onClick={() => onSent()} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
