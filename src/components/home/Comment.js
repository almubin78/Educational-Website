import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../../context/AuthProvider';
import { useState } from 'react';

const Comment = () => {
    const { user } = useContext(VarContext);
    const [open, setOpen] = useState(false);


    /* handle comment */
    // const handleComment = data => {
    //     console.log(data);
    // }

    const handleMoreSubject = () => {
        return (
            <>
                <div className="divider">ওয়েবসাইটের মাধ্যমে যা করতে পারবেঃ </div>
                <p className='mt-4'>✍ Subject ভিত্তিক MCQ প্রাকটিস করতে পারবে।</p><p className='mx-6 text-green-600'>MCQ Practice করার সময় যদি ভুল অপশন সিলেক্ট কর তাহলে,সঠিক উত্তর পেয়ে যাবে। </p>
                <p>✍ MCQ প্রাকটিস করার সময় ছোট খাট ক্যালকুলেশন করার সুবিধার্থে একটা সাধারণ ক্যালকুলেটর দিয়েছি</p>
                <p>✍ SSC Physics এর ক্ষেত্রে ছোট লজিকের (অনুধাবনমুলক) ম্যাথ গুলোর জন্য Functional সিষ্টেম সংযুক্ত করা হয়েছে।  </p>


                <p>✍ কোন কারণে লেকচার মিস করলে সেই লেকচারের pdf ফাইল ওয়েবসাইটেই পেয়ে যাবে।</p>
                <p>✍ সাপ্তাহিক পরীক্ষার রেজাল্ট, মাসিক পরীক্ষার রেজাল্ট, পেমেন্ট স্ট্যাটাসের তথ্যগুলো নিজের প্রফাইলে দেখতে পাবে</p>
                <div className="divider">আরো কিছু তথ্য</div>
                <p>✍ HSC Physics এর ক্ষেত্রে Basic থেকে শুরু করা হবে।</p>
                <p>✍ HSC এর ICT Student দের লেকচারের পাশাপাশি ক্যারিয়ার ডেভেলপমেন্ট এর দক্ষতা অর্জনের জন্য Advance ICT বিষয়ক additional লেকচার থাকছে। সাথে থাকছে প্রাকটিক্যালি কোডিং।</p>
                <p>✍ SSC Student দের পদার্থ বিজ্ঞানের লেকচারের পাশাপাশি Math Subject টি বোনাস হিসেবে পড়ানো হবে, কারণ ম্যাথ ছাড়া Physics অন্ধকার। </p>
            </>

        )
    }
    const toggleContent = () => {
        setOpen(!open)
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4 divider">গুরুত্বপুর্ণ তথ্যাবলী</h2>
            
            {/* Purpose of the Website */}
            <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">সাধারণ তথ্যঃ</h3>
                <p>
                    {
                        user ? <>
                            Welcome <span className='text-lg font-bold font-mono text-green-500'> {user.displayName} !! You have successfully Logged-in  </span>
                        </> : <>

                            <p>তুমি যদি SSC Level (Science)  অথবা HSC Level(science/arts/commerce) এর স্টুডেন্ট হয়ে থাক তাহলে- তোমাকে স্বাগত!!</p>
                            <p>এই প্রথম শুরু হতে যাচ্ছে Web ভিত্তিক নিম্নোক্ত বিষয় নির্ভর প্রাইভেট ব্যাচসমূহঃ</p>
                            <li>HSC  Physics-1</li>
                            <li>HSC  Physics-2</li>
                            <li>HSC  ICT</li>
                            <li>SSC  Physics [Nine and Ten]</li>
                            <p>দেরি না করে রেজিষ্টার করে সিট কনফার্ম কর।।</p>
                        </>
                    }
                </p>
                <div className="container mx-auto py-8">
                    {/* Other content */}
                    <button
                        onClick={toggleContent}
                        className={`btn `}
                    >
                        {open ? 'See Less' : 'See More'}
                    </button>
                    {open && handleMoreSubject()}
                    {/* Other content */}

                </div>


            </div>

            {/* How to Use the Website */}
            <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg  font-semibold mb-2">কিভাবে ব্যবহার করবে?</h3>
                <p>
                    {
                        !user ?
                            <>
                                👉🏻 তুমি একদম নতুন হয়ে থাকলে <Link className='underline text-purple-500' to='/register'>Create an account</Link> <span> 👈 লেখাটির উপর ক্লিক কর।</span> পুর্বেই রেজিষ্টার প্রক্রিয়া সম্পন্ন করে থাকলে <Link className='underline text-purple-500' to='/register'>Login</Link> <span> 👈 লেখাটির উপর ক্লিক কর।</span>
                            </> : <>
                                <div className="divider">Laptop/Compurter User</div>
                                <p className='rounded'>✅মেনুবারে অবস্থিত Schedule এ ক্লিক করে পেইড স্টুডেন্ট দের রুটিন দেখতে পারবে বা Practice এ ক্লিক করলে MCQ প্রাকটিস করতে পারবে। এছাড়াও Home,Log Out অপশন ও দেখতে পাবে।</p>

                                <div className="divider">Smart Phone User</div>
                                <p>👉🏻 উপরের ডানকোনায় তিনটি রো বরাবর রেখাতে ক্লিক করলে Home,Shedule, Practice,Log Out অপশন গুলো দেখতে পাবে। </p> <br />
                                চাইলে সরাসরি <span className='underline text-warning'><Link to='/practice'>Practice</Link></span> 👈 এ ক্লিক করেও MCQ প্রাকটিস করতে পার।
                                <div className="divider">দৃষ্টি আকর্ষণ</div>
                                <p>🛑 আপাতত SSC Level এর পদার্থ বিজ্ঞানের MCQ এড করা হচ্ছে। অন্যান্য ক্লাসের পর্যায়ক্রমে Add করা হবে</p>
                                <p>🛑 ডেভেলপমেন্টের বেশ কিছু কাজ বাকি আছে যা চলমান</p> <br />

                            </>


                    }


                </p>
            </div>


            {/* Subject Information */}
            <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">Subject Information</h3>
                <li>Physics- SSC & HSC</li>
                <li>ICT-HSC (with advance coding 😱😱)</li>
            </div>



            {/* Contact Us */}
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p>
                    If you have any questions, concerns, or feedback, feel free to reach out to me at - <br />
                    &#128231; almubin78@gmail.com <br />
                    📞 017-019-0-6543 <br />
                    Or Contact by social media like facebook,Linkedin and twitter, go to the bottom 👇🏻 of this page.
                </p>
            </div>
        </div>
    );
};

export default Comment;