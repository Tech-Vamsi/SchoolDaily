import leavelogo from '../../../images/leave-application.svg'
import attendancelogo from '../../../images/attendance.svg'
import reportslogo from '../../../images/reports.svg'
import feespaymentlogo from '../../../images/fees-payment.svg'
import notificationlogo from '../../../images/child-notification.svg'
const parentFeatureSet = {
    leave: {
        name: "leave",
        title: "Apply for Leave Application",
        image: leavelogo,
        alt: "Leave Application"
    },
    fees: {
        name: "fees",
        title: "Fees related Details",
        image: feespaymentlogo,
        alt: "Fees Payment"
    },
    reports: {
        name: "reports",
        title: "Analyze your Child's performance",
        image: reportslogo,
        alt: "Your wards' performance report"
    },
    attendance: {
        name: "attendance",
        title: "Monitor your Child's Attendance",
        image: attendancelogo,
        alt: "monitor attendance"
    },
    notification: {
        name: "notification",
        title: "Find all your child related concerns",
        image: notificationlogo,
        alt: "child related concerns"
    }
}
export default parentFeatureSet