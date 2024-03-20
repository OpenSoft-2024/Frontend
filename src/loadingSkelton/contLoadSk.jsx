// import ContinueToWatchMovieCard from '../HeorSectionComponents/ContinueToWatchMovieCard';


const ContinueToWatchMovieSkelton=()=>{



     let loading=['1','2','3','4','5','6','7'];
  return (
   <> 
    { loading.map(()=>{
         return (
            <div >
            <div
              className={`cont-movie-card rounded-lg overflow-hidden cursor-pointer bg-white loading`}
            >
              <div className=" w-full h-full rounded ">
                {/* <Img  className="w-full  h-full img-cont" /> */}
              </div>
            </div>
          </div>
         )
    })}
    </>
  )
}

export default ContinueToWatchMovieSkelton;