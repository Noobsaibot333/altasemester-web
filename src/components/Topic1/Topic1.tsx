import React, { useEffect, useState } from "react";
import styles from './Topic1.module.css';
import { fetchApi, getNumberOfImages } from "./Topic1.logic";
const Topic1 = () => {
    const [totalPages, setTotalPages] = useState(0);
    // const containerRef = useRef<HTMLDiveElement>
    const [listImages, setListImages] = useState<{ urls: string[] }[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        let myData: { urls: string[] }[] = [];
        let totalPages: number = 0;
        const getData = async () => {
            totalPages = Math.ceil((await getNumberOfImages()) / 9);
            myData = await fetchApi(pageNumber, 9);
            console.log(totalPages);
            setTotalPages(totalPages);
            setListImages(myData);
        }
        getData();
    }, [pageNumber])

    return (
        <div className={styles.container}>
            {listImages != null ? <div>
                {listImages.map((item: any, index: number) => {
                    return (
                        <div className={styles.subcontainer} style={{ justifyContent: item.urls }}>
                            {item.urls.map((row: string, subIndex: number) => {
                                return (
                                    <div className={styles.item}>
                                        <img src={row} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div> : null
            }

            {/* <div className={styles.subcontainer}>
                <div className={styles.item}>
                    <img src='https://alta-s3.dev-altamedia.com/cuong-test/images/1.jpg' />
                </div>
                <div className={styles.item}>
                    <img src='./images/image2.png' />
                </div>
                <div className={styles.item}>
                    <img src='./images/image3.png' />
                </div>
            </div>
            <div className={styles.subcontainer}>
                <div className={styles.item}>
                    <img src='./images/image4.png' />
                </div>
                <div className={styles.item}>
                    <img src='./images/image5.png' />
                </div>
                <div className={styles.item}>
                    <img src='./images/image6.png' />
                </div>
            </div>
            <div className={styles.subcontainer}>
                <div className={styles.item}>
                    <img src='./images/image7.png' />
                </div>
                <div className={styles.item}>
                    <img src='./images/image8.png' />
                </div>
                <div className={styles.item}>
                    <img src='./images/image9.png' />
                </div>
            </div> */}
            <div className={styles.pagination}>
                <ul>
                    {Array.from({ length: totalPages }, (_, index) => index + 1)
                        .map(item => {
                            return (
                                <li>
                                    <a href="#" style={{ color: 'white' }} onClick={() => setPageNumber(item)}>{item}</a>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div >
    );
}

export default Topic1; 
