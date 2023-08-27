import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Motivational = () => {
    const motivationalSpeeches = [
        'সফলতা প্রাপ্তির পথে অপ্রত্যাশিত ব্যাঘাত থাকতে পারে, তবে তুমি যদি তোমার লক্ষ্যে  অবিচল থাক তাহলে তুমি অবশ্যই সাফল্যে পৌঁছতে পারবে ।',
        'জীবন এবং সময়কে কীভাবে ও কোন পন্থায় ব্যবহার করা হয় তা দ্বাড়া আত্মমর্যাদাবোধ নির্ধারিত হয়ে থাকে।',
        'সফল হতে চাইলে,  পরিশ্রম কর।',
        'সুযোগ কখনো আমাদের দরজায় কড়া নাড়েনা কিংবা দরজা ভেংগে ভেতরে ঢুকার চেষ্টাও করেনা তবে সে আমাদের দরজার সামনেই দাঁড়িয়ে থাকে।',
        'তুমি যখন সামর্থ্যে বিশ্বাস কর,  এর অর্থ তুমি অসীম সম্ভাবনার দিকে যাচ্ছ ।',
        'আমাদের ভবিষ্যৎ নির্ধারিত হয় সর্বোচ্চ গুরুত্বের ইচ্ছা শক্তি দ্বারা ।',
        'প্রতিদিন একটি পদক্ষেপ নেওয়া, তোমাকে দিন দিন সফল বানাবে।',
        'সফলতা প্রাপ্তির জন্য তোমাকে শক্তিশালী কোনো ব্যক্তি হতে হবে না, শুধুমাত্র পরিকল্পনামাফিক কাজ করে যাও।',
        'সফল হতে চাইলে, তোমার পরিকল্পনার সাথে কঠোর পরিশ্রম করে যাও।',
    ];

    const [motivationalSpeechIndex, setMotivationalSpeechIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMotivationalSpeechIndex(prevIndex => (prevIndex + 1) % motivationalSpeeches.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="">
            <div className="motivational-section p-4 min-h-[150px] shadow-xl">
                <p className="text-lg italic text-purple-300">{motivationalSpeeches[motivationalSpeechIndex]}</p>
            </div>
        </div>
    );
};

export default Motivational;