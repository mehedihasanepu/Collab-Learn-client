/* import  { useState } from 'react'; 
import { Document, Page,pdfjs } from 'react-pdf'; 

const Pdf = () => {
    
const url = 
"https://crimson-joyann-35.tiiny.site"

	
pdfjs.GlobalWorkerOptions.workerSrc = 
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
const [numPages, setNumPages] = useState(null); 
const [pageNumber, setPageNumber] = useState(1); 


document.addEventListener("contextmenu", (event) => { 
	event.preventDefault(); 
}); 
	

function onDocumentLoadSuccess({ numPages }) { 
	setNumPages(numPages); 
	setPageNumber(1); 
} 

function changePage(offset) { 
	setPageNumber(prevPageNumber => prevPageNumber + offset); 
} 

function previousPage() { 
	changePage(-1); 
} 

function nextPage() { 
	changePage(1); 
} 


    return (

        <div>
            <div className="main"> 
	<Document 
		file={url} 
		onLoadSuccess={onDocumentLoadSuccess} 
	> 
		<Page pageNumber={pageNumber} /> 
	</Document> 
	<div> 
		<div className="pagec"> 
		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} 
		</div> 
		<div className="buttonc"> 
		<button 
		type="button"
		disabled={pageNumber <= 1} 
		onClick={previousPage} 
		className="Pre"
			
		> 
		Previous 
		</button> 
		<button 
		type="button"
		disabled={pageNumber >= numPages} 
		onClick={nextPage} 
		
		> 
		Next 
		</button> 
		</div> 
	</div> 
	</div> 
        </div>
    );
};

export default Pdf;
 */






/* 
    const Pdf = () => {
        return (
            <div>
                <div>
                <iframe  className="h-[700px] w-[600px]" src="https://drive.google.com/file/d/1gWjwYbvNIFXHRQuH24oTMRrpgkor4OQL/view?usp=sharingedit" title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
            </div>
        );
    };
    
    export default Pdf; */