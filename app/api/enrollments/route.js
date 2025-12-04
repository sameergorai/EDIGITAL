// app/api/register/route.js
import { NextResponse } from 'next/server';
import { getDB } from '@/app/lib/db';
import { normalizeFormData } from '@/app/lib/formNormalizer';

export async function POST(request) {
    const db = getDB();
    
    try {
        const rawFormData = await request.json();
        console.log("Raw form data:", rawFormData);
        
        // Normalize the form data
        const normalizedData = normalizeFormData(rawFormData);
        console.log("Normalized data:", normalizedData);
        
        // Validate required fields
        if (!normalizedData.full_name || !normalizedData.email || !normalizedData.phone) {
            return NextResponse.json(
                { error: 'Missing required fields: full_name, email, phone' },
                { status: 400 }
            );
        }
        
        // Insert into database
        const query = `
            INSERT INTO registrations (
                full_name, email, phone, role, course_name, 
                mode, background, message, source
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        const values = [
            normalizedData.full_name,
            normalizedData.email,
            normalizedData.phone,
            normalizedData.role || null,
            normalizedData.course_name || null,
            normalizedData.mode || null,
            normalizedData.background || null,
            normalizedData.message || null,
            normalizedData.source
        ];
        
        const [result] = await db.execute(query, values);
        
        console.log("Insert successful:", result);
        
        // Send response
        return NextResponse.json({
            success: true,
            message: 'Registration successful!',
            registrationId: result.insertId
        }, { status: 201 });
        
    } catch (error) {
        console.error("Database error:", error);
        
        return NextResponse.json(
            { 
                error: 'Registration failed', 
                details: error.message 
            },
            { status: 500 }
        );
    }
}
// import { NextResponse } from 'next/server';
// import { getDB } from '@/app/lib/db'; // ← correct path

// export async function POST(request) {
//     const db = getDB(); // ← yahi sahi tarika hai (no connection.end needed)

//     try {
//         const formData = await request.json();
// console.log("formData",formData)

       
       
//         const [result] = await db.execute(
//             `INSERT INTO enrollments 
//             (full_name, email, phone, mode, course_name, background, message) 
//             VALUES (?, ?, ?, ?, ?, ?, ?)`,
//             [
//                 formData.fullName.trim(),
//                 formData.email.toLowerCase().trim(),
//                 formData.phone.trim(),
//                 formData.mode,
//                 formData.courseName.trim(),
//                 formData.background.trim(),
//                 formData.message ? formData.message.trim() : null,

//                 formData.role.trim(),
//                 formData.role.trim(),
                
//             ]
//         );

//         // Fetch newly inserted row
//         const [newEnrollment] = await db.execute(
//             'SELECT * FROM enrollments WHERE id = ?',
//             [result.insertId]
//         );

//         // Response
//         return NextResponse.json(
//             {
//                 success: true,
//                 message: 'Enrollment submitted successfully!',
//                 enrollmentId: result.insertId,
//                 data: newEnrollment[0],
//                 timestamp: new Date().toISOString(),
//             },
//             { status: 201 }
//         );
//     } catch (error) {
//         console.error('ENROLLMENT ERROR:', error);

//         return NextResponse.json(
//             { error: 'Something went wrong' },
//             { status: 500 }
//         );
//     }
// }

// // import { NextResponse } from 'next/server';
// // // import nodemailer from 'nodemailer';

// // export async function POST(request) {
// //     console.log("hit hit hot")
// //     try {
// //         const formData = await request.json();

// //         // Validate required fields
// //         if (!formData.fullName || !formData.email || !formData.phone || !formData.mode || !formData.courseName || !formData. background || !formData. message ) {
// //             return NextResponse.json(
// //                 { error: 'Missing required fields' },
// //                 { status: 400 }
// //             );
// //         }


// //         // Save to database (example using MongoDB)
// //         // You can use any database: MongoDB, PostgreSQL, MySQL, etc.
// //         let savedData;
        
// //         // Example with MongoDB
// //         // const db = await connectToDatabase(); // Your DB connection function
// //         // savedData = await db.collection('enrollments').insertOne(formData);

// //         // For now, we'll log it and send email
// //         console.log('New enrollment:', formData);

// //         // Send email notification
// //         // await sendEmailNotification(formData);

// //         // Send confirmation email to user
// //         // await sendConfirmationEmail(formData);

// //         return NextResponse.json({
// //             success: true,
// //             message: 'Enrollment submitted successfully',
// //             data: formData,
// //             enrollmentId: savedData?.insertedId || 'demo-id'
// //         });

// //     } catch (error) {
// //         console.error('Error in enrollment API:', error);
// //         return NextResponse.json(
// //             { error: 'Internal server error' },
// //             { status: 500 }
// //         );
// //     }
// // }

// // // Email notification function
// // async function sendEmailNotification(formData) {
// //     try {
// //         // Configure nodemailer transporter
// //         const transporter = nodemailer.createTransport({
// //             service: 'gmail', // or your email service
// //             auth: {
// //                 user: process.env.EMAIL_USER,
// //                 pass: process.env.EMAIL_PASS,
// //             },
// //         });

// //         const mailOptions = {
// //             from: process.env.EMAIL_USER,
// //             to: 'admin@edigitalindia.com', // Your admin email
// //             subject: 'New Android Course Enrollment',
// //             html: `
// //                 <h2>New Course Enrollment Received</h2>
// //                 <p><strong>Course:</strong> ${formData.courseName}</p>
// //                 <p><strong>Name:</strong> ${formData.fullName}</p>
// //                 <p><strong>Email:</strong> ${formData.email}</p>
// //                 <p><strong>Phone:</strong> ${formData.phone}</p>
// //                 <p><strong>Background:</strong> ${formData.background}</p>
// //                 <p><strong>Mode:</strong> ${formData.mode}</p>
// //                 <p><strong>Message:</strong> ${formData.message || 'N/A'}</p>
// //                 <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
// //             `,
// //         };

// //         await transporter.sendMail(mailOptions);
// //     } catch (error) {
// //         console.error('Error sending notification email:', error);
// //     }
// // }

// // async function sendConfirmationEmail(formData) {
// //     try {
// //         const transporter = nodemailer.createTransport({
// //             service: 'gmail',
// //             auth: {
// //                 user: process.env.EMAIL_USER,
// //                 pass: process.env.EMAIL_PASS,
// //             },
// //         });

// //         const mailOptions = {
// //             from: process.env.EMAIL_USER,
// //             to: formData.email,
// //             subject: 'Enrollment Confirmation - Android App Development Course',
// //             html: `
// //                 <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
// //                     <h2 style="color: #059669;">Thank You for Your Interest!</h2>
// //                     <p>Dear <strong>${formData.fullName}</strong>,</p>
                    
// //                     <p>We've received your enrollment request for our <strong>Android App Development Course</strong>.</p>
                    
// //                     <div style="background-color: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0;">
// //                         <h3 style="color: #065f46;">Next Steps:</h3>
// //                         <ol>
// //                             <li>Our admission team will contact you within 24 hours</li>
// //                             <li>We'll schedule a counseling session</li>
// //                             <li>You'll receive the complete course syllabus</li>
// //                             <li>We'll discuss fee structure & payment options</li>
// //                         </ol>
// //                     </div>
                    
// //                     <p><strong>Course Details:</strong></p>
// //                     <ul>
// //                         <li>Duration: 6 Months</li>
// //                         <li>Mode: ${formData.mode}</li>
// //                         <li>Free Laptop Provided</li>
// //                         <li>Job Guarantee with Internship</li>
// //                     </ul>
                    
// //                     <p>For any immediate queries, contact us at:</p>
// //                     <p>📞 Phone: [Your Phone Number]</p>
// //                     <p>📧 Email: info@edigitalindia.com</p>
                    
// //                     <hr style="margin: 30px 0;">
                    
// //                     <p style="font-size: 12px; color: #666;">
// //                         Best regards,<br>
// //                         <strong>E Digital India Team</strong><br>
// //                         <a href="https://edigitalindia.com" style="color: #059669;">edigitalindia.com</a>
// //                     </p>
// //                 </div>
// //             `,
// //         };

// //         await transporter.sendMail(mailOptions);
// //     } catch (error) {
// //         console.error('Error sending confirmation email:', error);
// //     }
// // }