// app/lib/formNormalizer.js
export function normalizeFormData(formData) {
    const normalized = {
        full_name: '',
        email: '',
        phone: '',
        role: '',
        course_name: '',
        mode: '',
        background: '',
        message: '',
        source: 'unknown'
    };
    
    // Normalize name fields (name, fullName → full_name)
    normalized.full_name = formData.fullName || formData.name || formData.full_name || '';
    
    // Normalize email
    normalized.email = formData.email || '';
    
    // Normalize phone fields (phone, number → phone)
    normalized.phone = formData.phone || formData.number || formData.phone_number || '';
    
    // Normalize course fields
    normalized.course_name = formData.course || formData.courseName || '';
    
    // Normalize mode
    normalized.mode = formData.mode || '';
    
    // Normalize role
    normalized.role = formData.role || '';
    
    // Background
    normalized.background = formData.background || formData.qualification || '';
    
    // Message
    normalized.message = formData.message || formData.remarks || formData.notes || '';
    
    // Detect source based on fields present
    if (formData.role) {
        normalized.source = 'workshop';
    } else if (formData.course || formData.courseName) {
        normalized.source = 'course';
    }
    
    return normalized;
}