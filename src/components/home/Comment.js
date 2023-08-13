import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { VarContext } from '../../context/AuthProvider';
import { useState } from 'react';

const Comment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(VarContext);
    const [open, setOpen] = useState(false);


    /* handle comment */
    // const handleComment = data => {
    //     console.log(data);
    // }

    const handleMoreSubject = () => {
        return (
            <>
                <p>যে যে ফিয়েচার গুলো পর্যায়ক্রমে যুক্ত করা হবে।</p>
                <p>✍ Physics এর ছোট লজিকের (অনুধাবনমুলক) ম্যাথ গুলোর জন্য Functional সিষ্টেম ক্রিয়েট করা যাতে পুরো বিষয়টি কিভাবে ঘটে তার ব্যাখ্যা পেয়ে যাও। </p>
                <p className='divider'>Paid Student সমাচার </p>
                <p>✍  ওয়েবসাইটটিকে এনিমেটেড সিষ্টেমে আপগ্রেড করা যাতে (Physics এর উচ্চতর দক্ষতামুলক- গাণিতিক সমস্যার ক্ষেত্রে) কোন Student এর দেয়া তথ্যের উপর ভিত্তি করে এনিমেশনটি আচরণ পরিবর্তন করবে (যেমন গাড়ির গতি,হরিনের বেগ ইত্যাদির পরিবর্তন), আর পুরো বিষয়টি  মাথার ভিতরে গেথে যায়।</p>

                <p>✍ HSC এর ICT Student দের লেকচারের পাশাপাশি ক্যারিয়ার ডেভেলপমেন্ট এর দক্ষতা অর্জনের হাতেখড়ি দেবার জন্য Advance ICT বিষয়ক additional লেকচার থাকছে। সাথে প্রাকটিক্যালি কোডিং তো থাকছেই।</p>
                <p>✍ SSC Student দের পদার্থ বিজ্ঞানের লেকচারের পাশাপাশি Math Subject টি বোনাস হিসেবে পড়ানো হবে, কারণ ম্যাথ ছাড়া Physics অন্ধকার। </p>

                <p>✍ কোন কারণে লেকচার মিস করলে সেই লেকচারের pdf ফাইল ওয়েবসাইটেই পেয়ে যাবে।</p>
                <p>✍ সাপ্তাহিক পরীক্ষা, মাসিক পরীক্ষার রেজাল্টের তথ্য গুলো নিজের প্রফাইলে দেখতে পাবে, ভুলগুলো কোথায় ছিল, সমাধান কি ছিল সেটাও দেখতে পাবে।</p>
            </>

        )
    }
    const toggleContent = () => {
        setOpen(!open)
    }

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4 divider">নির্দেশনাঃ</h2>
            <h3 className='text-center px-5'>Development এর কাজ এখনো চলমান। সুতরাং নিচে বর্ণিত সবগুলো সুবিধা নাও দেখতে পার। প্রতিনিয়ত আপডেট করা হবে।</h3>
            {/* Purpose of the Website */}
            <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">উদ্দেশ্যঃ</h3>
                <p>
                    {
                        user ? <>
                            Hi <span className='text-lg font-bold'> {user.displayName}  </span>তুমি যদি SSC Level (নবম বা দশম) অথবা HSC Level এর স্টুডেন্ট হয়ে থাক তাহলে পদার্থবিজ্ঞান, ICT, Math [SSC] এর গুরুত্বপুর্ণ জ্ঞানমুলক,অনুধাবনমুলক প্রশ্নের উত্তর এবং MCQ প্রাকটিস করতে পারবে। <p className='mx-6 text-green-600 font-bold'>MCQ Practice করার সময় যদি ভুল অপশন সিলেক্ট কর তাহলে,সঠিক উত্তর পেয়ে যাবে। </p>
                        </> : <>
                            Welcome!! তুমি যদি SSC Level (নবম বা দশম) অথবা HSC Level এর স্টুডেন্ট হয়ে থাক তাহলে পদার্থবিজ্ঞান, ICT, Math [SSC] এর গুরুত্বপুর্ণ জ্ঞানমুলক,অনুধাবনমুলক প্রশ্নের উত্তর এবং MCQ প্রাকটিস করতে পারবে।। 
                            <p className='mx-6 text-green-600 font-bold'>MCQ Practice করার সময় যদি ভুল অপশন সিলেক্ট কর তাহলে,সঠিক উত্তর পেয়ে যাবে। </p>
                        </>
                    }

                    এছাড়াও বিভিন্ন চিপায় চাপায় কিছু ট্রিক দেখতে পাবে।
                </p> <br />
                <p>👉🏻 MCQ প্রাকটিস করার সময় ছোট খাট গুন ভাগ করার সুবিধার্থে একটা সাধারণ ক্যালকুলেটর দিয়েছি</p><br />
                <p>👉🏻 প্রাকটিস কালে (আপাতত) কিছু উপদেশ অথবা মোটিভেশনাল মার্কা কথাবার্তাকেও উপরের অংশে নাচানাচি করতে দেখবা।</p>
                <p className='text-red-300'>NB: রেজিষ্টার না করলে প্রাকটিস করার অপশনই পাবেনা।</p>
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
                                <p>👉🏻 Hey, Welcome !! Your have Successfully Logged In!!</p>
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

            {/* Payment Information */}
            {/* <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
                <div className="divider"></div>
                <p>Private Student রা গাণিতিক সমাধান করতে পারবে।</p>
                <p>নিজের পড়াশুনার রেকর্ড যাচাই নিজেরাই করতে পাড়বে</p>
            </div> */}
            {/* Subject Information */}
            <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">Subject Information</h3>
                <ol>
                    <li>HSC -Physics</li>
                    <li>HSC -ICT (with advance coding 😱😱)</li>
                    <li>SSC -Physics (Math is bonus 😱😱. I will cover those chapter which are relevant with physics and ICT)</li>
                </ol>
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